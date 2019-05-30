import React, { Component } from 'react';
import { VSuspenseLoading } from 'gsi-vx-ui';

const Table = React.lazy(() => {
  return Promise.all([
    import('../table/VTableWithWidget'),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]).then(([moduleExports]) => moduleExports);
});

class VSuspenseDoc extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: 600 }}>
        <VSuspenseLoading>
          <Table />
        </VSuspenseLoading>
      </div>
    );
  }
}

export default VSuspenseDoc;
