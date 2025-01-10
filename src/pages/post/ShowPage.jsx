import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const ShowPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const imagePath = post?.image.replace("img/", "");

    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`).then((resp) => {
            setPost(resp.data);
        })
    }, [id])

    return (
        <>
            {post && (
                <div>
                    <h1>{post.title}</h1>
                    <img src={`${apiUrl}/${imagePath}`} alt="" className="w-50"/>
                </div>
            )}
        </>
    )
}

export default ShowPage;