
export interface Booking {
    id: number
    service: string
    doctor_name: string
    start_time: string
    end_time: string
    date: string
}

export async function getBookings(): Promise<Booking[] | undefined> {
    const res = await fetch('http://localhost:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }