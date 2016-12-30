import React, { Component } from 'react';
import './Card.css';
import moment from 'moment';
import Barcode from 'react-barcode';

const MAN_PLACEHOLDER = 'https://7840e2a29ebbfd31609b-10a65ff22b7258c9b19000ca1639bfd7.ssl.cf2.rackcdn.com/6154/assets/img/user_placeholder_man.png';
const WOMAN_PLACEHOLDER = 'https://7840e2a29ebbfd31609b-10a65ff22b7258c9b19000ca1639bfd7.ssl.cf2.rackcdn.com/6154/assets/img/user_placeholder_woman.png';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      AccountId: 0,
      AmiliaId: 0,
      BarcodeSource: 'AmiliaId',
      DateOfBirth: null,
      Description: "Accès à la salle d'entraînement du Complexe Amilia Multi-Sports durant une période de 4 mois.",
      EffectiveDate: null,
      Email: null,
      ExpirationDate: null,
      Expired: false,
      ExternalMembershipNumber: null,
      FullName: null,
      Gender: null,
      HasPhoto: true,
      MembershipId: 4856,
      MembershipNumber: null,
      Name: "Abonnement au gym",
      OrganizationAddress: null,
      OrganizationEmail: 'marianne.david@amilia.com',
      OrganizationId: 1073,
      OrganizationLogoUrl: 'https://120c60ea587f7c5e8ae5-4b4fba300ebd32f891e458bb2df9e92a.ssl.cf2.rackcdn.com/logo1073_383e.jpg',
      OrganizationName: 'DEMO Amilia Multi-Sports',
      OrganizationPhone: null,
      OrganizationWebsite: '',
      PersonId: 0,
      ProfilePictureId: null,
      SubscriptionId: 0
    };
  }

  render() {
    const exp = moment(this.state.ExpirationDate).format('ll');
    const barcode = (this.state.barcodeAttr === 'AmiliaId' ? 'P' : '') + (this.state[this.state.barcodeAttr] || '?????');
    return (
      <div className="membership-card">
        <div className={'row first' + (this.state.HasPhoto ? '' : ' no-photo')}>
          <div className="org">
            <div className="logo">
              <img src={this.state.OrganizationLogoUrl} />
            </div>
            <div className="info">
              <div className="name">{this.state.OrganizationName}</div>
              <div className="website">{this.state.Name}</div>
              <br/>
              <div className="email">{this.state.OrganizationEmail}</div>
              <div className="phone">{this.state.OrganizationPhone}</div>
            </div>
          </div>
          { this.state.HasPhoto &&
            <div className="picture">
              <img className="profile-picture" src={this.state.Gender == "M" ? MAN_PLACEHOLDER : WOMAN_PLACEHOLDER} data-picture-id={this.state.ProfilePictureId} />
            </div>
          }
        </div>
        <div className="row second">
          <div className="person-info">
            <div className="name">{this.state.FullName || '??? ???'}</div>
            <Barcode className="bar-code pull-left" width={2} height={30} value={barcode} />
            { this.state.ExpirationDate &&
              <div className="dates pull-right">
                <span>Exp: {exp}</span><br/>
                { this.state.Expired ? <span className="expired">Carte expirée</span> : '' }
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
  
}

export default Card;
