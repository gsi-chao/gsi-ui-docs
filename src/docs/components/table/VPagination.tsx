import React, { Component } from 'react';
import { IInfoPage, VPagination } from 'gsi-vx-ui';

interface ISate {
  allCountries: any[];
  currentCountries: any[];
  currentPage: number;
  totalPages: number;
  itemsByPage: number;
}

class VPaginationDoc extends Component<any, ISate> {
  constructor(props: any) {
    super(props);
    this.state = {
      allCountries: this.getCountry(),
      currentCountries: [],
      currentPage: 1,
      totalPages: 0,
      itemsByPage: 5
    };
  }

  getCountry = () => {
    return [
      {
        country: 'Afghanistan'
      },
      {
        country: 'Albania'
      },
      {
        country: 'Algeria'
      },
      {
        country: 'American Samoa'
      },
      {
        country: 'Andorra'
      },
      {
        country: 'Angola'
      },
      {
        country: 'Anguilla'
      },
      {
        country: 'Antarctica'
      },
      {
        country: 'Antigua and Barbuda'
      },
      {
        country: 'Argentina'
      },
      {
        country: 'Armenia'
      },
      {
        country: 'Aruba'
      },
      {
        country: 'Australia'
      },
      {
        country: 'Austria'
      },
      {
        country: 'Azerbaijan'
      },
      {
        country: 'Bahamas'
      },
      {
        country: 'Bahrain'
      },
      {
        country: 'Bangladesh'
      },
      {
        country: 'Barbados'
      },
      {
        country: 'Belarus'
      },
      {
        country: 'Belgium'
      },
      {
        country: 'Belize'
      },
      {
        country: 'Benin'
      },
      {
        country: 'Bermuda'
      },
      {
        country: 'Bhutan'
      },
      {
        country: 'Bolivia'
      },
      {
        country: 'Bosnia and Herzegovina'
      },
      {
        country: 'Botswana'
      },
      {
        country: 'Bouvet Island'
      },
      {
        country: 'Brazil'
      },
      {
        country: 'British Indian Ocean Territory'
      },
      {
        country: 'Brunei'
      },
      {
        country: 'Bulgaria'
      },
      {
        country: 'Burkina Faso'
      },
      {
        country: 'Burundi'
      },
      {
        country: 'Cambodia'
      },
      {
        country: 'Cameroon'
      },
      {
        country: 'Canada'
      },
      {
        country: 'Cape Verde'
      },
      {
        country: 'Cayman Islands'
      },
      {
        country: 'Central African Republic'
      },
      {
        country: 'Chad'
      },
      {
        country: 'Chile'
      },
      {
        country: 'China'
      },
      {
        country: 'Christmas Island'
      },
      {
        country: 'Cocos (Keeling) Islands'
      },
      {
        country: 'Colombia'
      },
      {
        country: 'Comoros'
      },
      {
        country: 'Congo'
      },
      {
        country: 'The Democratic Republic of Congo'
      },
      {
        country: 'Cook Islands'
      },
      {
        country: 'Costa Rica'
      },
      {
        country: 'Ivory Coast'
      },
      {
        country: 'Croatia'
      },
      {
        country: 'Cuba'
      },
      {
        country: 'Cyprus'
      },
      {
        country: 'Czech Republic'
      },
      {
        country: 'Denmark'
      },
      {
        country: 'Djibouti'
      },
      {
        country: 'Dominica'
      },
      {
        country: 'Dominican Republic'
      },
      {
        country: 'East Timor'
      }
    ];
  };

  onPageChanged = (data: any) => {
    const { currentPage, totalPages } = data.paginationData;

    const offset = (currentPage - 1) * data.pageLimit;
    // console.log('data', data);

    const currentCountries = this.getCountry().slice(
      offset,
      offset + data.pageLimit
    );
    // console.log('currentCountries', currentCountries);
    this.setState({
      currentPage,
      currentCountries,
      totalPages,
      itemsByPage: data.pageLimit
    });
  };

  render() {
    const { allCountries } = this.state;
    const totalCountries = allCountries.length;

    if (totalCountries === 0) return null;

    return (
      <React.Fragment>
        <ul>
          {this.state.currentCountries.map((x: any, index: number) => (
            <li key={index}>{x.country}</li>
          ))}
        </ul>

        <p>By default</p>
        <VPagination
          totalRecords={totalCountries}
          pageLimit={this.state.itemsByPage}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
          currentPage={this.state.currentPage}
          labels={{ pages: 'paginas' }}
          customerStyle={{ borderRadius: '0px' }}
        />

        <p>Customer</p>

        <VPagination
          totalRecords={totalCountries}
          currentPage={this.state.currentPage}
          pageLimit={this.state.itemsByPage}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
          labels={{
            itemsByPage: 'Elementos por paginas',
            renderInfoDetails: this.renderInfoDetails
          }}
          style={{ backgroundColor: '#2D2F31', color: 'white' }}
          customerStyle={{
            pageSelectedBackgroundColor: '#1985A1',
            pageSelectedColor: 'white',
            iconColor: 'white',
            pageHoverColor: 'black',
            pageHoverBackgroundColor: '#1985A1',
            borderRadius: '0px'
          }}
        />
      </React.Fragment>
    );
  }

  renderInfoDetails = (infoPage: IInfoPage) => {
    return (
      <div style={{ margin: '0px 10px' }}>
        {' '}
        {`${infoPage.currentPage}- ${infoPage.totalPages} <=> Totals ${
          infoPage.totals
        }  `}
      </div>
    );
  };
}

export default VPaginationDoc;
