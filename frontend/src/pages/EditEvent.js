import {useRouteLoaderData, json, redirect} from 'react-router-dom'

import EventForm from '../components/EventForm'


const EditEventPage = () =>
{
  const data = useRouteLoaderData('event-detail')
  const event = data.event

  return (
    <EventForm event={event}/> 
  )
}

export default EditEventPage

export const action = async ({request, params}) =>
{
  const data = await request.formData()
  
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  const eventId = params.eventId
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: 'PATCH',
    headers: { 
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok)
  {
    throw json({message: 'Could not save event.'}, {status: 500})
  }
  return redirect('/events')
}