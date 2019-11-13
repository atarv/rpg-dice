import * as React from 'react'

interface IHistoryProps {
    content: string
}

const History: React.FunctionComponent<IHistoryProps> = ({content}) => {
    return (
        <div className="history">
            <pre>
                {content}
            </pre>
        </div>
    )
}

export default History;