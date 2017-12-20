import React, { Component } from 'react';
import './ArticleTitle.css';

class ArticleTitle extends Component {
    render() {
        return (
           <div>
                <header className="Article-header">
                    <h1 className="Article-title">Título artículo</h1>
                    <h3>Nombre autor</h3>
                </header>
           </div>
        );
    }
}

export default ArticleTitle;
