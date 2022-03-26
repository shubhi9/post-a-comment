import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from '@faker-js/faker';

const App = () => {
    return (
        <div className='ui container comments'>
          <ApprovalCard>
            <CommentDetail 
              author='Amy' 
              timeAgo="Today at 6:00PM" 
              cmt='Noice!'
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail 
              author='RoRo' 
              timeAgo="Today at 3:00AM" 
              cmt='Great!'
              avatar={faker.image.avatar()} 
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail 
              author='Charles' 
              timeAgo="Today at 2:00PM" 
              cmt='Woah'
              avatar={faker.image.avatar()} 
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail 
              author='Ct.Holts' 
              timeAgo="Yesterday at 6:00AM" 
              cmt='Nice!'
              avatar={faker.image.avatar()} 
            />  
          </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));