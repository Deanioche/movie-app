import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { state } = this.props.location;
        if (state) {
            const { year, title, summary, poster, genres } = state;
            return (
                <>
                    <div className="detail">
                        <img
                            className="detail_img"
                            src={poster}
                            alt={title}
                            title={title}
                        />
                        <h2 className="detail_title">
                            {title} <span>{year}</span>
                        </h2>
                        <h5>
                            <ul className="detail_genres">
                                {genres.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </h5>
                        <p className="detail_summary">{summary}</p>
                    </div>
                    <div className="push"></div>
                </>
            );
        } else {
            return null;
        }
    }
}

export default Detail;