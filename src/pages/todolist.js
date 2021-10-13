import React, { Component } from 'react'
import { getTodos, updateTodos, createTodos } from '../utils'
export default class Todolist extends Component {
    state = {
        jobs: [],
        jobName: '',
        due: ''
    }

    componentDidMount = async () => {
        const lists = await getTodos(this.props.token)

        this.setState({ jobs: lists })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createTodos(this.state.jobName, this.state.due, this.props.token);

        const lists = await getTodos(this.props.token);

        this.setState({ jobs: lists, jobName: '', due: ''})
    }

    render() {
        console.log(this.state.jobs)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.jobName} onChange = {e => this.setState({ jobName: e.target.value})} />Job
                    <input value={this.state.due} onChange = {e => this.setState({due: e.target.value})}/>Due Date
                    <button>Add</button>
                </form>
                <div>
                    {this.state.jobs.sort((a, b) => a.status - b.status).map(job => 
                    <div
                        onClick={async() =>{ 
                            await updateTodos(job.id, !job.status, job.job, job.due, this.props.token)
                            const jobs = await getTodos(this.props.token)
                            this.setState({ jobs })
                        }}
                        className={job.status ? 'job complete' : 'job incomplete'}>
                            {job.job}
                            </div>)}
                </div>
                
            </div>
        )
    }
}
