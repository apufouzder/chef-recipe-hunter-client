import LazyLoad from "react-lazy-load";


const NotFound = () => {
    return (
        <>
            <LazyLoad offset={300}>
                <img className="mx-auto" loading="lazy" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1685157988~exp=1685158588~hmac=8f1b425ab9c98c9dbfafa8549c6601682854694040d0ed89c1550e06cb46d006" alt="404" />
            </LazyLoad>
        </>
    );
};

export default NotFound;