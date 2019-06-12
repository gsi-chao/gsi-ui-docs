import React, { Component } from 'react';
import { DnDList, DragAndDropList, IDNDList } from 'gsi-ui';
import { H1 } from '@blueprintjs/core';

const list: IDNDList[] = [
  {
    id: '1',
    label: 'List 1',
    list: [
      {
        label: 'Item 1',
        value: '1'
      },
      {
        label: 'Item 2',
        value: '2'
      },
      {
        label: 'Item 3',
        value: '3'
      },
      {
        label: 'Item 4',
        value: '4'
      }
    ]
  },
  {
    id: '2',
    label: 'List 2',
    list: [
      {
        label: 'Item 5',
        value: '5'
      },
      {
        label: 'Item 6',
        value: '6'
      },
      {
        label: 'Item 7',
        value: '7'
      },
      {
        label: 'Item 8',
        value: '8'
      }
    ]
  },
  {
    id: '3',
    label: 'List 3',
    list: [
      {
        label: 'Item 9',
        value: '9'
      },
      {
        label: 'Item 10',
        value: '10'
      },
      {
        label: 'Item 11',
        value: '11'
      },
      {
        label: 'Item 12',
        value: '12'
      }
    ]
  }
];
const style = {
  height: '100px',
  backgroundColor: '#90beee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start'
};

const items = [
  {
    id: '1',
    content: (
      <div style={style}>
        <img height={'100px'} src={'https://picsum.photos/100'} />
        <span style={{ marginLeft: 5 }}>Item1</span>
      </div>
    )
  },
  {
    id: '2',
    content: (
      <div style={style}>
        <img height={'100px'} src={'https://picsum.photos/100'} />
        <span style={{ marginLeft: 5 }}>Item2</span>
      </div>
    )
  },
  {
    id: '3',
    content: (
      <div style={style}>
        <img height={'100px'} src={'https://picsum.photos/100'} />
        <span style={{ marginLeft: 5 }}>Item3</span>
      </div>
    )
  }
];

const NewDndList = () => {
  return (
    <DnDList
      list={items}
      direction={'vertical'}
      paddingList={'2px'}
      width={'50px'}
    />
  );
};

class VDragAndDropDoc extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <>
        <DragAndDropList
          list={list}
          containerOrientation="horizontal"
          onDragAndDrop={output => console.log(output)}
        />
        <H1>New Drag & Drop Component.</H1>
        <NewDndList />
      </>
    );
  }
}

export default VDragAndDropDoc;
