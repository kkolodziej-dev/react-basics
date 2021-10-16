import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={props.showAddTask ? 'red' : 'green'} text={props.showAddTask ? 'Zamknij dupę' : 'Dodaj dupę'} onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Lista dup'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
