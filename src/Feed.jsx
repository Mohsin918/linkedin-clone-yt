import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CreateIcon from '@mui/icons-material/Create';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapsot => (
            setPosts(snapsot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    },[])
    
    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
            </div>
        </div>

            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post
                    key = {id}
                    name= {name}
                    description = {description}
                    message = {message}
                    photoUrl= {photoUrl}
                />
                ))}
            </FlipMove>
    </div>
  )
}

export default Feed
