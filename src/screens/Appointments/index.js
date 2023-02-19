import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Appointments = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button title="Pick a date & time" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        minuteInterval={15}
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          console.log(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default Appointments