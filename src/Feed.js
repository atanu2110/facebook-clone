import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])


    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post
                profilePic="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/104880524_3709578782391595_4429417409057907473_o.jpg?_nc_cat=108&_nc_sid=e3f864&_nc_ohc=UnNs-hIawF0AX9KfmWX&_nc_ht=scontent.fhyd2-1.fna&oh=40a28f057622d30391db5783ad5a013d&oe=5F802B19"
                message='WOW this works.....'
                timestamp='this is a timestamp'
                username='Atanu'
                image="https://i.pinimg.com/originals/4f/69/50/4f69504f62d5eda2ab0fb8c023db56fc.jpg"
            />
            <Post
                profilePic="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/83233797_3180644445325317_8056770623643764506_o.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=iNZ_XiFD9A8AX-m8qnC&_nc_ht=scontent.fhyd2-1.fna&oh=1a0021a5ca35dc30fa01ef84e66ccae9&oe=5F7E8A93"
                message='Hello from Piyali....'
                timestamp='this is a timestamp'
                username='Piyali'
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            /> */}


        </div>
    )
}

export default Feed
