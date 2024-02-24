export default function Selector({ title, options }) {
    return (
        <>
            <div className="selector">
                <label htmlFor="selector">{title}</label>
                <select id="selector">
                    <option disabled value=""></option>
                    {options.map((opt, index) => (
                        <option value={opt} key={index}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
