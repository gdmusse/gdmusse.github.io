import React, { useEffect, useContext } from "react";
import {
  ScreenContainer,
  PostsContainer,
  AddPostButton,
  InputDiv,
} from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { goToCreatePostPage, goToPostPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";
import AlertModified from "../../components/Alert";
import useInput from "../../hooks/useInput";
import TextField from "@material-ui/core/TextField";

const FeedPage = () => {
  useProtectedPage();
  const {
    loading,
    setLoading,
    posts,
    setPosts,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
  } = useContext(GlobalStateContext);
  const history = useHistory();

  const [search, setSearch] = useInput("");

  const onClickCard = (id) => {
    goToPostPage(history, id);
  };

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const upvotePost = (post) => {
    if (post.userVoteDirection > 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: 1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setAlertMsg("Post upvoted successfully");
          setAlertSeverity("success");
          setOpenAlert(true);
          getPosts();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const downvotePost = (post) => {
    if (post.userVoteDirection < 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: -1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setAlertMsg("Post downvoted successfully");
          setAlertSeverity("success");
          setOpenAlert(true);
          getPosts();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const unvotePost = (post) => {
    const body = {
      direction: 0,
    };
    axios
      .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAlertMsg("Unvoted sucessfully");
        setAlertSeverity("success");
        setOpenAlert(true);
        getPosts();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPosts();
    setLoading(true);
    setCurrentPage(1);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortPosts = posts.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const filteredPosts = sortPosts.filter((post) => {
    const titlePost = post.title.toLowerCase();
    const textPost = post.text.toLowerCase();
    const userPost = post.username.toLowerCase();
    if (
      titlePost.includes(search.toLowerCase()) ||
      textPost.includes(search.toLowerCase()) ||
      userPost.includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsCards = currentPosts.map((post) => {
    var date = new Date(post.createdAt);
    return (
      <PostCard
        key={post.id}
        title={post.title}
        votesCount={post.votesCount}
        username={post.username}
        createdAt={date.toLocaleDateString()}
        commentsCount={post.commentsCount}
        onClickCard={() => onClickCard(post.id)}
        userVoteDirection={post.userVoteDirection}
        onClickUpvote={() => upvotePost(post)}
        onClickDownvote={() => downvotePost(post)}
      />
    );
  });

  return (
    <ScreenContainer>
      <InputDiv>
        <TextField
          name={"search"}
          value={search}
          onChange={setSearch}
          variant={"outlined"}
          label={"Search by title, text or username"}
          fullWidth
          autoFocus
          margin={"normal"}
        />
      </InputDiv>

      {loading ? <Loader /> : <PostsContainer>{postsCards}</PostsContainer>}

      <Pagination totalPosts={filteredPosts.length} />
      <AlertModified />
      <AddPostButton
        color={"primary"}
        onClick={() => goToCreatePostPage(history)}
      >
        <Add />
      </AddPostButton>
    </ScreenContainer>
  );
};

export default FeedPage;
