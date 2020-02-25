import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';
import ColumnContainer from '../../components/Column/ColumnContainer';
import PopupNameContainer from '../../components/PopupName/PopupNameContainer';
import PopupCardContainer from '../../components/PopupCard/PopupCardContainer';

const Layout = ({
  columns,
  name,
  currentCardId,
}) => (
  <div className="Layout">
    {columns.map((column) => {
      return (
        <ColumnContainer
          key={column.id}
          id={column.id}
          title={column.title}
        />
      );
    })}
    {!name && <PopupNameContainer />}
    {currentCardId && (<PopupCardContainer />)}
  </div>
);

Layout.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  name: PropTypes.string.isRequired,
  currentCardId: PropTypes.number,
};

Layout.defaultProps = {
  currentCardId: null,
};

export default Layout;
