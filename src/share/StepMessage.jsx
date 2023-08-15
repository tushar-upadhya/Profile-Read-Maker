const StepMessage = ({ condition, message }) => {
    return condition ? (
        <div className="text-center text-sm uppercase font-semibold text-slate-800 pt-2">
            {message}
        </div>
    ) : null;
};

export default StepMessage;
