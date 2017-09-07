import React, {Component} from 'react';
import { Grid, Icon, Divider, Progress } from 'semantic-ui-react'

export default class Competences extends Component {

  render() {
    return(
      <span>
        <Divider horizontal>Compétences</Divider>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Progress percent={100} progress indicating>
                <a href='https://www.w3schools.com/html/html5_intro.asp'target='_blank'><Icon name='html5' />HTML5</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={95} progress indicating>
                <a href='http://php.net/manual/fr/intro-whatis.php'target='_blank'>Php5</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={90} progress indicating>
                <a href='https://www.w3schools.com/css/'target='_blank'><Icon name='css3' />CSS3</a>
              </Progress>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Progress percent={90} progress indicating>
                <a href='https://www.w3schools.com/js/default.asp'target='_blank'>JavaScript</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={70} progress indicating>
                <a href='https://facebook.github.io/react/'target='_blank'>ReactJS</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={70} progress indicating>
                <a href='http://redux.js.org/'target='_blank'>Redux</a>
              </Progress>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Progress percent={70} progress indicating>
                <a href='https://www.processmaker.com/'target='_blank'>ProcessMaker</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={60} progress indicating>
                <a href='http://sass-lang.com/'target='_blank'>Sass CSS</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={50} progress indicating>
                <a href='https://symfony.com/'target='_blank'>Symfony</a>
              </Progress>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column>
              <Progress percent={100} progress indicating>
                <a href='http://sass-lang.com/'target='_blank'>JSON</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={100} progress indicating>
                <a href='https://www.w3.org/XML/'target='_blank'>XML</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={90} progress indicating>
                <a href='https://www.mysql.com/fr/'target='_blank'>MySQL</a>
              </Progress>
            </Grid.Column>
            <Grid.Column>
              <Progress percent={80} progress indicating>
                <a href='https://technet.microsoft.com/fr-fr/library/ms189826(v=sql.90).aspx'target='_blank'>Transact-SQL</a>
              </Progress>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </span>
    );
  }
}
