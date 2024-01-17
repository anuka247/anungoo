import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';

const XOgame = () => {
    const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', ''])
    const [lastClick, setLastClick] = useState('')
    const [winner, setWinner] = useState('')
    const checkWinner = (boxes) => {
        console.log("boxes", boxes);
        // 1. Хэвтээ шалгалт
        if (boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
            console.log('Winner1', boxes[0]);
            setWinner(boxes[0])
        } else if (boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
            console.log('Winner2', boxes[3]);
            setWinner(boxes[3])
        }
        // 2. Босоо шалгалт
        if (boxes[0] !== '' && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
            console.log('Winner3', boxes[0]);
            setWinner(boxes[0])
        }
        else if (boxes[1] !== '' && boxes[1] === boxes[4] && boxes[1] === boxes[7]) {
            console.log('Winner4', boxes[1]);
            setWinner(boxes[1])
        }
        else if (boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
            console.log('Winner5', boxes[2]);
            setWinner(boxes[2])
        }
        // 3. Ташуу шалгалт
        if (boxes[0] !== '' && boxes[0] === boxes[4] && boxes[0] === boxes[8]) {
          console.log('Winner3', boxes[0]);
          setWinner(boxes[0])
      }
      else if (boxes[2] !== '' && boxes[2] === boxes[4] && boxes[2] === boxes[6]) {
          console.log('Winner4', boxes[2]);
          setWinner(boxes[2])
      }
  
    }
    const handleClick = (i) => {
        if (boxes[i] === '') {
  
            let newValue = lastClick === 'X' ? 'O' : 'X';
            boxes[i] = newValue;
            setBoxes([...boxes])
            setLastClick(newValue)
            // Check winner
            checkWinner(boxes)
        }
  
    }
    const handleRestart = () => {
        setBoxes(['', '', '', '', '', '', '', '', ''])
        setWinner('')
        setLastClick('')
    }
  return (
    
    <View style={styles.container}>

    {winner && <Text style={styles.winner} >Winner: {winner}</Text>}
    {winner && <TouchableOpacity style={styles.restart} onPress={handleRestart}  >
        <Text style={styles.winner} > Restart</Text>
    </TouchableOpacity>}


    <View style={[styles.main, styles.shadow]}>
        {boxes.map((box, i) =>
            <TouchableOpacity style={styles.box} onPress={() => handleClick(i)}>
                <Text style={styles.text}>{box}</Text>
            </TouchableOpacity>
        )}

    </View>
</View>
 );
    
}

export default XOgame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      main:{
        width:400,
        height:500,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#90e0ef',
        flexWrap:'wrap',
      },
      box:{
        width:120,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ffcad4',
        margin:5,
      }, shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
      },
         text: {
        fontSize: 70
      },
       winner: {
        fontSize: 60,
        color: 'green'
      },
        restart: {
        fontSize: 50,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 20,
        padding: 10
      },
    
})