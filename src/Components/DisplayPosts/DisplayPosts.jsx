
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
                    </tr>
                </tbody>
            );
          })}
      </table>
     );
}
 
export default DisplayPosts;