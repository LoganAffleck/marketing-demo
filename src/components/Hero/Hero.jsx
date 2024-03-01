import React, { useState } from "react";
import styles from "./styles.module.css";
import {Image, Button} from '@builder.io/react';

let Hero = (props) => {

    return(
        <div className={styles.hero}>
             <Image className={styles.heroImage} image={props.image} alt="Hero image"/>
             <div className={styles.heroWrapper}>
                <h1>{props.heading}</h1>
                <p className={styles.heroText}>{props.heroText}</p>
                <button className={styles.button}>
                    <Button  text={props.buttonText} link={props.buttonLink}/>
                </button>
                
             </div>

        </div>
    )
}

export default Hero