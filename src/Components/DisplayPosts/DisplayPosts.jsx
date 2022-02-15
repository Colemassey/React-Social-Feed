import LikeButton from '../LikeButton/LikeButton';
import './LikeButton/LikeButton.jsx'


const DisplayPosts = (props) => {
    return ( 
        <table>
          {props.parentPosts.map((post) => {
            return (
                <tbody className='border-box'>
                    <tr>
                        <th>{post.name}</th>
                    </tr>
                    <tr>
                        <td>{post.post}</td>
                        <td><LikeButton onLikeClick={props.onLikeClick} onDislikeClick={props.onDisLikeClick} /></td>
                    </tr>
                </tbody>
            );
          })}
      </table>
     );
}
 
export default DisplayPosts;