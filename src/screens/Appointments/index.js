import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from "@react-navigation/native";


const Appointments = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const navigation = useNavigation()

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

          navigation.navigate('Confirmation', {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          })
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default Appointments