"use client"
import React, { useState, useEffect } from 'react';

const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
];

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(PostsData);
  }, []);

  return (
    <div>
      <header className="app-header"></header>
      <Title />
      <div className="app-card-list" id="app-card-list">
        {posts.map((post, index) => (
          <Card key={index} details={post} />
        ))}
      </div>
    </div>
  );
}

function Title() {
  return (
    <section className="app-title">
      <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        <a
          className="designer-link"
          href="https://dribbble.com/shots/1978243-Latest-News"
          target="_blank"
        >
          Design from <i className="fa fa-dribbble"></i>
        </a>
      </div>
    </section>
  );
}

function Button() {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  );
}

function CardHeader({ image, category }) {
  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
}

function CardBody({ title, text }) {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>
      <h2>{title}</h2>
      <p className="body-content">{text}</p>
      <Button />
    </div>
  );
}

function Card({ details }) {
  return (
    <article className="card">
      <CardHeader category={details.category} image={details.image} />
      <CardBody title={details.title} text={details.text} />
    </article>
  );
}

const Books = () => {
  return (
    <>
      <Main />
    </>
  );
}

export default Books;
