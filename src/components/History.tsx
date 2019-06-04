import * as React from 'react'

interface IHistoryProps {
    content: string
}

const History: React.FunctionComponent<IHistoryProps> = props => {
    return (
        <div className="history">
            <pre>
                {props.content}
            </pre>
        </div>
    )
}

export default History;