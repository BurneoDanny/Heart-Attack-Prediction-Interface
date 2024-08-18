

function Validation({ errors }) {
    return (
        <div className="text-left">
            {Object.keys(errors).map((key) => (
                <p key={key} className="error-message text-red-500 text-xs mt-1 mb-2">{errors[key]}</p>
            ))}
        </div>
    );
}

export default Validation;
