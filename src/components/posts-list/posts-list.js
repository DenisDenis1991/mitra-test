/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import Posts from "../posts/posts";
import { AppRoute } from "../../const";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import {ListGroup, NavItem, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { PER_PAGE } from "../../const";


const PostsList = (posts) => {
  const allUsers = useSelector(state => state.userReducer.users);
  const filteredPostList = posts.posts
  const currentPage = useSelector(state => state.userReducer.currentPage);
  const indexCurrentPage = useSelector(state => state.userReducer.indexCurrentPage);
  const userId = Array.from(new Set(posts.posts.map(item => item.userId)));
  const users = allUsers.filter(el => userId.includes(el.id))

  let clearUsers = [];


  for (let i = indexCurrentPage*PER_PAGE; i <= indexCurrentPage*PER_PAGE+1; i++) {
    users[i] ? clearUsers.push(users[i]) 
    : 
    <></>
  }

  return(
    clearUsers.length !== 0 ?
    <Container>
      <ListGroup>
        {clearUsers.map((user) => 
          <ListGroup.Item key={user.id}>
            <LinkContainer id={user.id} to={AppRoute.Posts} style={{cursor: 'pointer'}} onClick={(evt) => {console.log(evt.currentTarget.id);localStorage.setItem('activeUser', evt.currentTarget.id )}}>
              <NavItem>
                <div className="d-flex align-items-center gap-23">
                  <svg className="me-10" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#000" fillOpacity=".4"/>
                  </svg>
                  <h1 className="flex-grow-1 ms-2">{user.name}</h1>
                </div>
              </NavItem>
            </LinkContainer>
            <Posts id={user.id} filteredPostList={filteredPostList} />
          </ListGroup.Item>
          )}
      </ListGroup>
    </Container>
      : <></>
  )
}
export default PostsList;




