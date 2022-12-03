import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=goa,himachalpradesh,rajasthan"
  );

  return (
    <div className="featured">
    {loading ? (
      "Loading please wait"
    ) : (
      <>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Goa</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1607836046730-3317bd58a31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWNoYWwlMjBwYXJkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Himachal Pradesh</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhamFzdGhhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rajasthan</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default Featured;