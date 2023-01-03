import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './OurStories.css'
import { StoryData } from './OurStoriesData';

const OurStories = () => {


  useEffect(() => {

  }, []);

  return (
        <div className='ourStories'>
            <h1 style={{fontSize:60,fontWeight:700,textAlign:'center',marginBottom:80}}>OUR STORIES</h1>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 singleStory">
<img style={{width:'100%'}} src="Images/story1.png" alt="" />
<h1>
Do I Need to Know How To Swim to Scuba Dive?
</h1>
<p>
This is a question that I often get asked, and really it is not as simple as YES or NO. If you want to become a certified scuba diver by doing the PADI Open Water Diver Course, the answer is yes. In the PADI Open Water Diver Course it is specified that you have to be able to swim 200 metres. This can be with any stroke. You also have to be able to tread water or float for at least 10 minutes.  kee [...]
</p>
<Button className='readStoryBtn'>
READ STORY
</Button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 stories">
                    {StoryData && StoryData.map((data) => (
<div className="story">
    <div>
<img src={data.image} alt="" />
    </div>
    <div>
<div className='storyHead'>
{data.name}
</div>
<Button className='readStoryBtn' style={{marginTop:10}}>
READ STORY
</Button>
    </div>
</div>
))}
                </div>
            </div>
 </div>
  );
};

export default OurStories;
