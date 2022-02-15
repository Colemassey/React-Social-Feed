import LikeButton from '../LikeButton/LikeButton';
import './DisplayPosts.css'


const DisplayPosts = (props) => {
    return ( 
        <table className="borderLine">
          {props.parentPosts.map((post, index) => {
            return (
                <tbody>
                    <tr style={{'marginTop': '1em'}}>
                        <th>{post.name}</th>
                    </tr>
                    <tr style={{'marginTop': '1em'}}>
                        <td>{post.post}</td>
                    </tr>
                    <tr style={{'marginTop': '1em'}}>
                    <td><LikeButton onLikeClick={props.onLikeClick} onDislikeClick={props.onDislikeClick} index={index} post={post}  /></td>
                    </tr>
                </tbody>
            );
          })}
      </table>
     );
}
 
export default DisplayPosts;