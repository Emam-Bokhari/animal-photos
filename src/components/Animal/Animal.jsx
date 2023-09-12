import PropTypes from 'prop-types'

const Animal=({data})=>{
    const {url}=data
    return (
        <div>
           <div>
            <img className="w-96 h-96" src={url} />
           </div>
        </div>
    )
}

Animal.propTypes={
    data:PropTypes.object.isRequired
}

export default Animal