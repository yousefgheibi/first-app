import { Fragment } from "react";
import styled from "./spinner.module.css";

function Spinner() {
    return (
        <Fragment>
            <div className={styled.wrapper}>
                <div className={styled.loader}></div>
            </div>
        </Fragment>
    )
}

export default Spinner;