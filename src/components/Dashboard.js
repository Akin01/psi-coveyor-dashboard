import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

import Card from './utils/Card';
import CardWrap from './utils/CardWrap';

import Temperature from './Dashboard/Temperature';
import LpgTotal from './Dashboard/LpgTotal';
import Status from './Dashboard/Status';
import Sample from './Dashboard/Sample';
import Mass from './Dashboard/Mass';
import Process from './Dashboard/Process';

const host = 'broker.emqx.io';
const port = 8083;
let clientId = `psi_responsi${Math.random().toString(16).slice(3)}`;

// connect options
const OPTIONS = {
  clientId,
  keepalive: 30,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};

const Dashboard = () => {
  const [temperature, setTemperature] = useState(0);
  const [lpgTotal, setLpgTotal] = useState(0);
  const [mass, setMass] = useState(0);
  const [numberOfSample, setNumberOfSample] = useState(0);

  const [isStop, setIsStop] = useState(0);
  const [isGas, setIsGas] = useState(0);

  const [connectStatus, setConnectStatus] = useState('connecting');
  const [isSubcribe, setIsSubcriber] = useState(false);
  const [client, setClient] = useState(null);

  useEffect(() => {
    setClient(mqtt.connect(`ws://${host}:${port}/mqtt`, OPTIONS));
  }, []);

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        setConnectStatus('connected');
        console.log(connectStatus);
      });
      client.on('reconnect', () => setConnectStatus('reconnecting'));
      client.on('error', (err) => console.log(err));
    }
  }, [client, connectStatus]);

  useEffect(() => {
    if (client) {
      client.subscribe(['responsi/data/aktuator/#'], () => {
        setIsSubcriber(true);
        console.log(`isSubcribed = ${isSubcribe}`);
      });
    }
  }, [client, isSubcribe]);

  useEffect(() => {
    if (client) {
      client.on('message', (topic, payload) => {
        if (topic === 'responsi/data/aktuator/temperature') {
          setTemperature(Number(payload.toString()));
        } else if (topic === 'responsi/data/aktuator/lpgTotal') {
          setLpgTotal(Number(payload.toString()));
        } else if (topic === 'responsi/data/aktuator/numberOfSample') {
          setNumberOfSample(Number(payload.toString()));
        } else if (topic === 'responsi/data/aktuator/Mass') {
          setMass(Number(payload.toString()));
        } else if (topic === 'responsi/data/aktuator/isStop') {
          setIsStop(Number(payload.toString()));
        } else if (topic === 'responsi/data/aktuator/isGas') {
          setIsGas(Number(payload.toString()));
        }
      });
    }
  }, [client]);

  return (
    <>
      <CardWrap
        styleClass={'w-full h-2/5 mr-2 rounded-lg mt-10 flex justify-between'}
      >
        <CardWrap
          styleClass={
            'w-3/4 h-full bg-white mr-6 rounded-lg flex justify-center items-center drop-shadow-lg'
          }
        >
          <Card
            styleClass={
              'w-2/5 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col items-center'
            }
          >
            <Temperature value={temperature} />
          </Card>
          <Card
            styleClass={
              'w-2/5 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col justify-center items-center'
            }
          >
            <LpgTotal value={lpgTotal} />
          </Card>
        </CardWrap>
        <CardWrap
          styleClass={
            'w-1/4 h-full bg-white ml-6 rounded-lg flex justify-center items-center drop-shadow-lg'
          }
        >
          <Status isLeak={isGas} />
        </CardWrap>
      </CardWrap>

      <CardWrap
        styleClass={'w-full h-2/5 rounded-lg mt-12 flex justify-between'}
      >
        <CardWrap
          styleClass={
            'w-3/6 h-full bg-white mr-12 rounded-lg drop-shadow-lg flex justify-center items-center'
          }
        >
          <Card
            styleClass={
              'w-5/6 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col justify-center items-center'
            }
          >
            <Sample
              mass={mass}
              isGas={isGas}
              lpgTotal={lpgTotal}
              numberOfSample={numberOfSample}
            />
          </Card>
        </CardWrap>
        <CardWrap
          styleClass={
            'w-3/6 h-full bg-white mx-auto rounded-lg drop-shadow-lg flex justify-center items-center'
          }
        >
          <Card
            styleClass={
              'w-5/6 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col justify-center items-center'
            }
          >
            <Mass value={mass} />
          </Card>
        </CardWrap>
        <CardWrap
          styleClass={
            'w-3/6 h-full bg-white ml-12 rounded-lg drop-shadow-lg flex justify-center items-center'
          }
        >
          <Card
            styleClass={
              'w-5/6 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col justify-center items-center'
            }
          >
            <Process isStop={isStop} />
          </Card>
        </CardWrap>
      </CardWrap>
    </>
  );
};

export default Dashboard;
