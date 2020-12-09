import React from 'react';

class SearchBar extends React.Component {
    state = { userInput: '' };

// These two are arrow functions beause these are call back functions that we'll pass to some child element.
    onInputChange = event => {
        this.setState({ userInput: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault(); //prevents form refreshing upon user entering

        this.props.onFormSubmit(this.state.userInput);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form
                onSubmit={this.onFormSubmit} 
                className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.userInput} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;