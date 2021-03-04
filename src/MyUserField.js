function MyUserField({ record = {}, source}) {
    return (
        <a href={record[source]}>
            {record[source]}
        </a>
    )
}

export default MyUserField