import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import { Line } from 'react-chartjs-2';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: '/fonts/Roboto-Bold.ttf',
      fontWeight: 700,
    },
    {
      src: '/fonts/Roboto-Medium.ttf',
      fontWeight: 500,
    },
    {
      src: '/fonts/Roboto-Regular.ttf',
      fontWeight: 400,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    position: 'relative',
    padding: '62px 60px 50px 60px',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  pageHeader: {
    marginBottom: '19',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageHeaderSubtitle: {
    marginBottom: '2',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '8.5',
    letterSpacing: '0.2',
    lineHeight: 1.18,
    color: '#707070',
  },

  pageHeaderTitle: {
    marginBottom: '8',
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '23',
    lineHeight: 1.48,
    color: '#000',
  },

  pageHeaderImg: {
    width: '43',
    height: '43',
    borderRadius: '50',
  },

  pageHeaderBot: {
    flexDirection: 'row',
  },

  pageHeaderBotText: {
    marginRight: '20',
    fontSize: '7.5',
    color: '#585858',
    letterSpacing: '0.08pt',
  },

  pageHeaderBotTextSpan: {
    fontFamily: 'Roboto',
    fontWeight: 500,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '7px 9px',
    width: '475',
    height: '23',
    borderRadius: '1.8',
    backgroundColor: '#f4f6f7',

    text: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '7',
      color: '#44434b',

      dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '7',
        color: '#505d6c',

        symbol: {
          display: 'inline-block',
          marginLeft: '4pt',
          width: '4.5pt',
          height: '2.9pt',
        },
      },
    },
  },

  sectionProgress: {
    paddingTop: '31',
    paddingBottom: '12',

    item: {
      marginBottom: '19',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '7.8',
      color: '#454545',

      name: {
        width: '55px',
        textAlign: 'right',
      },

      bar: {
        marginLeft: '18px',
        marginRight: '18px',
        width: '240.9px',
        height: '10px',
        borderRadius: '4',
        backgroundColor: '#ecf0f6',
        overflow: 'hidden',
      },

      amount: {
        width: '55px',
        textAlign: 'left',

        perc: {
          marginLeft: '3',
          fontWeight: 400,
        },
      },
    },
  },

  comments: {
    flexWrap: 'wrap',
    paddingTop: '15pt',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    comment: {
      marginBottom: '15pt',
      width: '230px',
      borderRadius: '2.5',
      // boxShadow: '0 3px 6px 0 rgba(226, 226, 226, 0.11)',
      border: '1 solid #eaeaea',

      header: {
        paddingLeft: '9',
        paddingRight: '14',
        paddingTop: '6',
        paddingBottom: '5',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1 solid #eaeaea',

        img: {
          width: '27',
          heihgt: '27',
          borderRadius: '50',
        },

        name: {
          marginLeft: '10',
          fontFamily: 'Roboto',
          fontSize: '8.8',
          fontWeight: 500,
          color: '#292929',
        },

        amount: {
          marginLeft: 'auto',
          fontSize: '7',
          color: '#5d5d5d',
        },
      },

      ratings: {
        padding: '7pt 0pt 4pt',
        margin: '0 10pt',
        borderBottom: '1pt solid #EAEAEA',

        item: {
          marginBottom: '6pt',
          flexDirection: 'row',
          alignItems: 'center',

          name: {
            marginRight: '12pt',
            width: '50',
            fontFamily: 'Roboto',
            fontSize: '7.3',
            fontWeight: 500,
            letterSpacing: '0.07',
            color: '#383838',
          },

          star: {
            marginRight: '2pt',
            width: '9.1',
            height: '8.7',
          },
        },
      },

      body: {
        padding: '10pt',
        paddingTop: '7pt',
        paddingBottom: '4pt',

        message: {
          width: '186px',
          fontFamily: 'Roboto',
          fontSize: '7.3',
          fontWeight: 400,
          lineHeight: '1.77',
          letterSpacing: '0.07',
          color: '#383838',

          text: {
            marginBottom: '6pt',

            span: {
              fontWeight: 500,
            },
          },
        },
      },
    },
  },

  sectionFeedback: {
    marginLeft: '15pt',
    paddingTop: '26pt',
    paddingBottom: '23pt',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    item: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      title: {
        marginBottom: '40pt',
        margin: '0 17pt',
        fontFamily: 'Roboto',
        fontSize: '8pt',
        fontWeight: 500,
        letterSpacing: '0.15',
      },

      img: {
        width: '68pt',
        height: '68pt',
      },
    },

    divider: {
      margin: '0 14pt',
      marginTop: '12pt',
      padding: '6pt',
      paddingTop: '7pt',
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '7',
      color: '#767676',
      letterSpacing: '0.15',
      borderTop: '2pt solid #EAEEEF',
    },
  },

  sectionDevelopment: {
    padding: '38pt',
    paddingBottom: '10pt',

    img: {
      width: '100%',
    },

    legend: {
      alignSelf: 'center',
      width: '251pt',
      paddingTop: '8pt',
      marginTop: '28pt',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '1pt solid #EAEAEA',

      item: {
        margin: '0 15pt',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        circleRed: {
          marginRight: '2.5pt',
          backgroundColor: '#ff7f00',
          width: '6pt',
          height: '6pt',
          borderRadius: 50,
        },

        circleBlue: {
          marginRight: '2.5pt',
          backgroundColor: '#059ef5',
          width: '6pt',
          height: '6pt',
          borderRadius: 50,
        },

        circleGreen: {
          marginRight: '2.5pt',
          backgroundColor: '#30ea4f',
          width: '6pt',
          height: '6pt',
          borderRadius: 50,
        },

        text: {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '7.3pt',
          letterSpacing: '0.07pt',
          color: '#464646',
        },
      },
    },
  },

  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    marginTop: '32pt',
    position: 'relative',
    fontFamily: 'Roboto',
    fontSize: '7pt',
    fontWeight: 400,
    color: '#4e4e4e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '9pt',
    paddingBottom: '50pt',
    borderTop: '1pt solid #EAEAEA',

    info: {
      color: '#4e4e4e',

      name: {
        fontWeight: 700,
        justifySelf: 'center',
      },
    },

    company: {
      transform: 'translate(-38%, 0)',
      fontWeight: 700,
    },
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/*  PAGE HEADER  */}
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.pageHeaderSubtitle}>Employee Report</Text>
          <Text style={styles.pageHeaderTitle}>Peter Smith</Text>

          <View style={styles.pageHeaderBot}>
            <Text style={styles.pageHeaderBotText}>
              <Text style={styles.pageHeaderBotTextSpan}>Job title:</Text>{' '}
              Javascript developer
            </Text>

            <Text style={styles.pageHeaderBotText}>
              <Text style={styles.pageHeaderBotTextSpan}>Team:</Text> Frontend
              Developers
            </Text>
          </View>
        </View>
        <Image style={styles.pageHeaderImg} source={'/user-placeholder.png'} />
      </View>

      {/*  SECTION FEEDBACK HEADER  */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader.text}>Amount of feedback</Text>
        <View style={styles.sectionHeader.text.dropdown}>
          <Text>Amount of feedback</Text>
          <Image
            style={styles.sectionHeader.text.dropdown.symbol}
            source={'/caret-down.png'}
          />
        </View>
      </View>

      {/*  SECTION FEEDBACK  */}
      <View style={styles.sectionFeedback}>
        <View style={styles.sectionFeedback.item}>
          <Text style={styles.sectionFeedback.item.title}>Given feedback</Text>
          <Image
            style={styles.sectionFeedback.item.img}
            source={'/circ-progress-blue.png'}
          />
        </View>

        <Text style={styles.sectionFeedback.divider}>Apr 2020 - Jun 2020</Text>

        <View style={styles.sectionFeedback.item}>
          <Image
            style={styles.sectionFeedback.item.img}
            source={'/circ-progress-red.png'}
          />
          <Text style={styles.sectionFeedback.item.title}>
            Received feedback
          </Text>
        </View>
      </View>

      {/*  SECTION HEADER  */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader.text}>
          How Peter is doing at the moment
        </Text>
        <View style={styles.sectionHeader.text.dropdown}>
          <Text>This month averages</Text>
          <Image
            style={styles.sectionHeader.text.dropdown.symbol}
            source={'/caret-down.png'}
          />
        </View>
      </View>

      <View style={styles.sectionProgress}>
        <View style={styles.sectionProgress.item}>
          <Text style={styles.sectionProgress.item.name}>Attitude</Text>
          <View style={styles.sectionProgress.item.bar}>
            <View
              style={{
                height: '100%',
                width: '80%',
                backgroundColor: '#30ea4f',
              }}
            ></View>
          </View>
          <Text style={styles.sectionProgress.item.amount}>
            Great{' '}
            <Text style={styles.sectionProgress.item.amount.perc}>+20%</Text>
          </Text>
        </View>

        <View style={styles.sectionProgress.item}>
          <Text style={styles.sectionProgress.item.name}>Productivity</Text>
          <View style={styles.sectionProgress.item.bar}>
            <View
              style={{
                height: '100%',
                width: '60%',
                backgroundColor: '#ffba00',
              }}
            ></View>
          </View>
          <Text style={styles.sectionProgress.item.amount}>
            Amazing{' '}
            <Text style={styles.sectionProgress.item.amount.perc}>+10%</Text>
          </Text>
        </View>

        <View style={styles.sectionProgress.item}>
          <Text style={styles.sectionProgress.item.name}>Teamworking</Text>
          <View style={styles.sectionProgress.item.bar}>
            <View
              style={{
                height: '100%',
                width: '40%',
                backgroundColor: '#ff7600',
              }}
            ></View>
          </View>
          <Text style={styles.sectionProgress.item.amount}>
            Bad{' '}
            <Text style={styles.sectionProgress.item.amount.perc}>-14%</Text>
          </Text>
        </View>
      </View>

      {/*  SECTION HEADER  */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader.text}>Longterm development</Text>
        <View style={styles.sectionHeader.text.dropdown}>
          <Text>Last 9 months</Text>
          <Image
            style={styles.sectionHeader.text.dropdown.symbol}
            source={'/caret-down.png'}
          />
        </View>
      </View>

      {/* SECTION DEVELOPMENT */}
      <View style={styles.sectionDevelopment}>
        <Image
          style={styles.sectionDevelopment.img}
          source={'/graph-placeholder.png'}
        />
        <View style={styles.sectionDevelopment.legend}>
          <View style={styles.sectionDevelopment.legend.item}>
            <View
              style={styles.sectionDevelopment.legend.item.circleRed}
            ></View>
            <Text style={styles.sectionDevelopment.legend.item.text}>
              Attitude
            </Text>
          </View>

          <View style={styles.sectionDevelopment.legend.item}>
            <View
              style={styles.sectionDevelopment.legend.item.circleBlue}
            ></View>
            <Text style={styles.sectionDevelopment.legend.item.text}>
              Productivity
            </Text>
          </View>

          <View style={styles.sectionDevelopment.legend.item}>
            <View
              style={styles.sectionDevelopment.legend.item.circleGreen}
            ></View>
            <Text style={styles.sectionDevelopment.legend.item.text}>
              Teamworking
            </Text>
          </View>
        </View>
      </View>

      {/*  FOOTER  */}
      <View style={styles.footer}>
        <Text style={styles.footer.info}>
          <Text style={styles.footer.info.name}>Peter Smith</Text> - Javascript
          Developer
        </Text>

        <Text style={styles.footer.company}>Example Company</Text>

        <Text style={styles.footer.date}>15.8.2020</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page} wrap>
      {/*  PAGE HEADER  */}
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.pageHeaderSubtitle}>Employee Report</Text>
          <Text style={styles.pageHeaderTitle}>Peter Smith</Text>

          <View style={styles.pageHeaderBot}>
            <Text style={styles.pageHeaderBotText}>
              <Text style={styles.pageHeaderBotTextSpan}>Job title:</Text>{' '}
              Javascript developer
            </Text>

            <Text style={styles.pageHeaderBotText}>
              <Text style={styles.pageHeaderBotTextSpan}>Job title:</Text>{' '}
              Javascript developer
            </Text>
          </View>
        </View>
        <Image style={styles.pageHeaderImg} source={'/user-placeholder.png'} />
      </View>
      {/*  SECTION HEADER  */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader.text}>
          Average received feedback by users
        </Text>
        <View style={styles.sectionHeader.text.dropdown}>
          <Text>6 per page</Text>
          <Image
            style={styles.sectionHeader.text.dropdown.symbol}
            source={'/caret-down.png'}
          />
        </View>
      </View>

      <View style={styles.comments}>
        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>

        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>

        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>

        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>

        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>

        {/* COMMENT */}
        <View style={styles.comments.comment}>
          {/* COMMENT HEADER */}
          <View style={styles.comments.comment.header}>
            <Image
              style={styles.comments.comment.header.img}
              source={'/user-placeholder.png'}
            />

            <Text style={styles.comments.comment.header.name}>Eve Larsson</Text>
            <Text style={styles.comments.comment.header.amount}>
              7 feedbacks
            </Text>
          </View>

          {/* COMMENT RATINGS */}
          <View style={styles.comments.comment.ratings}>
            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Attitude:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Productivity:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>

            <View style={styles.comments.comment.ratings.item}>
              <Text style={styles.comments.comment.ratings.item.name}>
                Teamworking:
              </Text>
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
              <Image
                style={styles.comments.comment.ratings.item.star}
                source={'/star.png'}
              />
            </View>
          </View>

          {/* COMMENT TEXT */}
          <View style={styles.comments.comment.body}>
            <View style={styles.comments.comment.body.message}>
              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Compliments:
                </Text>{' '}
                Amazing presentation, Good translations, You are a great
                colleague, A pleasure working with you
              </Text>

              <Text style={styles.comments.comment.body.message.text}>
                <Text style={styles.comments.comment.body.message.text.span}>
                  Improvers:
                </Text>{' '}
                Please clearer instructions for me, Don’t be so angry all the
                time, Please start coming earlier to work
              </Text>
            </View>
            <View style={styles.comments.comment.body.message}></View>
          </View>
        </View>
      </View>

      {/*  FOOTER  */}
      <View style={styles.footer}>
        <Text style={styles.footer.info}>
          <Text style={styles.footer.info.name}>Peter Smith</Text> - Javascript
          Developer
        </Text>

        <Text style={styles.footer.company}>Example Company</Text>

        <Text style={styles.footer.date}>15.8.2020</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
