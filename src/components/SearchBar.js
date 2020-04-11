import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Videos:</label>
                        <input 
                            type="text"
                            value={this.state.term} 
                            onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;