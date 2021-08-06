import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (<div>
        <Link to="/">Home</Link>
        <Link
            to={{
                pathname: "/about",
                state: {
                    fromNavigation: true,
                },
            }}
        >
            About
        </Link>
    </div>
    )
} // <a> 태그는 html이므로 클릭시마다 페이지전체의 새로고침이 일어난다.
// react-router-dom에서 Link를 import해 대신 사용하면 필요한 부분만 새로고침 할 수 있다.

export default Navigation