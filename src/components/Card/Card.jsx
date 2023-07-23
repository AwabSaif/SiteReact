import React from 'react'
import './Card.css'
import Star from '../Star/Star';
import Avatar from '../Avatar/Avatar';
import AvatarImg from "../../assets/images/my photo-.png"

export default function Card() {
  return (
    <div class="container-card">
    <div class="card">
       <Avatar src={AvatarImg} alt="Awab saif" />
        <div class="content">
            <p class="date">December 18, 2023</p>
            <h3>November Rain</h3>
            <p class="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <Star />
    </div>
    </div>
  )
}
