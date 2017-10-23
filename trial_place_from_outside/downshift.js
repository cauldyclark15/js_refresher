import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {debounce, throttle, get} from 'lodash';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import {
  SearchFormWrapper,
  FormFieldsWrapper,
  InputWrapper,
  InputMainWrapper,
  ButtonWrapper
} from './styles/fiddleStyles';
import CategoriesDropdown from './CategoriesDropdown';
import Autocomplete from './Autocomplete';
import * as actions from '../../redux/servicesSearch';
import {getServices} from '../../queries';

const propTypes = {}

const defaultProps = {}

class SearchForm extends Component {

  componentWillMount() {
    this._onFetch = debounce(this._onFetch, 300);
  }

  _onFetch = () => {
    const {currentQuery, data} = this.props;

    data.refetch({
      query: currentQuery
    });
  }

  _onChange = (selectedItem, downshiftState) => {
    console.log('DOWN STATE', downshiftState)
    const {updateQuery} = this.props;

    updateQuery(selectedItem);
    this._onFetch();
  }

  render() {
    const {data, currentQuery, dispatch, dropdown, updateQuery, showDropdown, toggleDropdown, _handleSubmit} = this.props;

    return (
      <SearchFormWrapper onSubmit={_handleSubmit} style={{margin: 0, padding: 0}}>
        <FormFieldsWrapper>
          <Field
            name='search'
            component={Autocomplete}
            onChange={this._onChange}
            selectedItem={currentQuery}
          />
          <ButtonWrapper type='submit'>Get Started</ButtonWrapper>
        </FormFieldsWrapper>
      </SearchFormWrapper>
    );
  }
}


const mapStateToProps = (state) => ({
  currentQuery: state.servicesSearch.query,
  showDropdown: state.servicesSearch.showDropdown,
});

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

const SearchFormReduxConnect =reduxForm({
  form: 'servicesSearch'
})(connect(mapStateToProps, actions)(SearchForm));

export default getServices(SearchFormReduxConnect);
