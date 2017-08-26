import React, {Component} from 'react';


export default class Deck extends Component {

    render() {
        return(
          <div className="deck">
            <table>
              <thead>
                <tr>
                  <th>NOM</th>
                  <th>CLAN</th>
                  <th>ÉTOILE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>clan</td>
                  <td>5</td>
                </tr>
                </tbody>
            </table>
            <span className="textDeck">
              8 cartes, 36 étoiles
            </span>
          </div>
        );
    }
}
