import React, { Fragment } from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp'

class YouTubeCompPage extends React.Component {
    render() {
        return (
            <Fragment>
                <p>Halaman YouTube</p>
                <hr/>
                <YouTubeComp 
                    title="Video Pertama"
                    description="Ini deskripsi dari video ke-1"/>
                <YouTubeComp 
                    title="Video Kedua"
                    description="Ini deskripsi dari video ke-2"/>
                <YouTubeComp 
                    title="Video Ketiga"
                    description="Ini deskripsi dari video ke-3"/>
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default YouTubeCompPage;