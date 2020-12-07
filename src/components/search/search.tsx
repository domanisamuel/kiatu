import React from 'react'
import styles from './search.module.scss'
import className from 'classnames'

interface Props {
    placeholder: String
}

const Search: React.FC <Props> =(props:any)=> {
    const {  type, value, placeholder, onChange } = props;
    return (
        <div className={styles.search_container}>
            <i className={className("fa fa-search search-icon", styles.icon)}></i>
            <input 
                type={ type ? type : 'text' }
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={styles.search_input}
            />
        </div>
    )
}
export default Search