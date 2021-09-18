export const Activities = ({ activities }) => {

    return (<div className="activities-container flex column">
        {(activities && activities.length > 0) ? activities.map(activity => <div>
            <span key={activity.id}>{activity.text}</span>
            <hr />
        </div >) : <span>No activities yet...</span>}
    </div>)
}