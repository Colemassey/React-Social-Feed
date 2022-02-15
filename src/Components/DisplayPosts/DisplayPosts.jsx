import LikeButton from '../LikeButton/LikeButton';
import './DisplayPosts.css'


const DisplayPosts = (props) => {
    return ( 
        <table>
          {props.parentPosts.map((post, index) => {
            return (
                <tbody className='border-box'>
                    <tr>
                        <th>{post.name}</th>
                    </tr>
                    <tr>
                        <td>{post.post}</td>
                        <td><LikeButton onLikeClick={props.onLikeClick} onDislikeClick={props.onDislikeClick} index={index} post={post} /></td>
                    </tr>
                </tbody>
            );
          })}
      </table>
     );
}
 
export default DisplayPosts;