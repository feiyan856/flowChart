export const flowData = {
    'edg':[
      {
        'start': '7.43',
        'end': '7.45',
        'option': {
          'messagesInPerSec': '113.47msg/s',
          'BytesInPerSec': '21339.09byte/s',
          'function_name': 'avro2string_appcommentsstatistic',
          'name': 'avro2string_appcommentsstatistic',
          'direct': 'sink',
          'topic': 'appnews_comments_statistic_prepared_v1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.29',
        'end': '7.90',
        'option': {
          'messagesInPerSec': '16.75msg/s',
          'BytesInPerSec': '95893.26byte/s',
          'function_name': 'avro2string_appnews',
          'name': 'avro2string_appnews',
          'direct': 'sink',
          'topic': 'appnews_doc_prepared_v1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.26',
        'end': '7.77',
        'option': {
          'messagesInPerSec': '3.22msg/s',
          'BytesInPerSec': '9213.32byte/s',
          'function_name': 'avro2string_bbs',
          'name': 'avro2string_bbs',
          'direct': 'sink',
          'topic': 'bbs_doc_prepared_v1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.34',
        'end': '7.80',
        'option': {
          'messagesInPerSec': '4.17msg/s',
          'BytesInPerSec': '4175.7byte/s',
          'function_name': 'avro2string_forum',
          'name': 'avro2string_forum',
          'direct': 'sink',
          'topic': 'tieba_doc_prepared',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.35',
        'end': '7.80',
        'option': {
          'messagesInPerSec': '67.27msg/s',
          'BytesInPerSec': '37944.38byte/s',
          'function_name': 'avro2string_forumcomment',
          'name': 'avro2string_forumcomment',
          'direct': 'sink',
          'topic': 'tieba_comment_prepared',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.24',
        'end': '7.85',
        'option': {
          'messagesInPerSec': '47.78msg/s',
          'BytesInPerSec': '246758.41byte/s',
          'function_name': 'avro2string_news',
          'name': 'avro2string_news',
          'direct': 'sink',
          'topic': 'news_doc_prepared_v1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.23',
        'end': '7.87',
        'option': {
          'messagesInPerSec': '0.37msg/s',
          'BytesInPerSec': '1355.24byte/s',
          'function_name': 'avro2string_overseanews',
          'name': 'avro2string_overseanews',
          'direct': 'sink',
          'topic': 'overseanews_doc_prepared_1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.31',
        'end': '7.42',
        'option':{
          'messagesInPerSec': '20.61msg/s',
          'BytesInPerSec': '10850.38byte/s',
          'function_name': 'avro2string_appcomment',
          'name': 'avro2string_sink_appcomment',
          'direct': 'sink',
          'topic': 'appnews_comments_prepared_v1',
          'type': 'task',
          'pg_connection_name': '10.20.8.12_pg'
        }
      },
      {
        'start': '7.11',
        'end': '7.32',
        'option':{
          'messagesInPerSec':'12.26msg/s',
          'BytesInPerSec':'44449.0byte/s',
          'function_name':'avro2string_blog',
          'name':'avro2string_sink_blog',
          'direct':'sink',
          'topic':'blog_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.2',
        'end':'7.20',
        'option':{
          'messagesInPerSec':'0.14msg/s',
          'BytesInPerSec':'624.62byte/s',
          'function_name':'avro2string_elecnews',
          'name':'avro2string_sink_elecnews',
          'direct':'sink',
          'topic':'newspaper_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.2',
        'end':'7.9',
        'option':{
          'function_name':'avro2string_elecnews',
          'name':'avro2string_sink_elecnews1',
          'type':'task'
        }
      },
      {
        'start':'7.27',
        'end':'7.89',
        'option':{
          'messagesInPerSec':'5.96msg/s',
          'BytesInPerSec':'74973.7byte/s',
          'function_name':'avro2string_weixin_gzh',
          'name':'avro2string_weixin_gzh',
          'direct':'sink',
          'topic':'weixin_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.31',
        'end':'7.54',
        'option':{
          'messagesInPerSec':'20.61msg/s',
          'BytesInPerSec':'10850.38byte/s',
          'function_name':'',
          'name':'es_sink_appnews_comments_prepared_v2',
          'direct':'sink',
          'topic':'appnews_comments_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.29',
        'end':'7.57',
        'option':{
          'messagesInPerSec':'16.75msg/s',
          'BytesInPerSec':'95893.26byte/s',
          'function_name':'',
          'name':'es_sink_appnews_doc_prepared_v1',
          'direct':'sink',
          'topic':'appnews_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.30',
        'end':'7.58',
        'option':{
          'messagesInPerSec':'0.01msg/s',
          'BytesInPerSec':'5.8byte/s',
          'function_name':'',
          'name':'es_sink_bbs_comment_prepared',
          'direct':'sink',
          'topic':'bbs_comment_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.26',
        'end':'7.59',
        'option':{
          'messagesInPerSec':'3.24msg/s',
          'BytesInPerSec':'9221.97byte/s',
          'function_name':'',
          'name':'es_sink_bbs_doc_prepared_v1',
          'direct':'sink',
          'topic':'bbs_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.11',
        'end':'7.60',
        'option':{
          'messagesInPerSec':'12.22msg/s',
          'BytesInPerSec':'44590.58byte/s',
          'function_name':'',
          'name':'es_sink_blog_doc_prepared_1',
          'direct':'sink',
          'topic':'blog_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.13',
        'end':'7.61',
        'option':{
          'messagesInPerSec':'0.13msg/s',
          'BytesInPerSec':'271.76byte/s',
          'function_name':'',
          'name':'es_sink_facebook_prepared',
          'direct':'sink',
          'topic':'facebook_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.25',
        'end':'7.62',
        'option':{
          'messagesInPerSec':'0.0msg/s',
          'BytesInPerSec':'1.13byte/s',
          'function_name':'',
          'name':'es_sink_news_comments_prepared',
          'direct':'sink',
          'topic':'news_comments_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.24',
        'end':'7.63',
        'option':{
          'messagesInPerSec':'47.65msg/s',
          'BytesInPerSec':'246196.31byte/s',
          'function_name':'',
          'name':'es_sink_news_doc_prepared_v1',
          'direct':'sink',
          'topic':'news_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.2',
        'end':'7.64',
        'option':{
          'messagesInPerSec':'0.14msg/s',
          'BytesInPerSec':'618.4byte/s',
          'function_name':'',
          'name':'es_sink_newspaper_doc_prepared_1',
          'direct':'sink',
          'topic':'newspaper_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.23',
        'end':'7.65',
        'option':{
          'messagesInPerSec':'0.36msg/s',
          'BytesInPerSec':'1335.36byte/s',
          'function_name':'',
          'name':'es_sink_overseanews_doc_prepared_1',
          'direct':'sink',
          'topic':'overseanews_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.35',
        'end':'7.66',
        'option':{
          'messagesInPerSec':'67.27msg/s',
          'BytesInPerSec':'37944.38byte/s',
          'function_name':'',
          'name':'es_sink_tieba_comment_prepared',
          'direct':'sink',
          'topic':'tieba_comment_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.34',
        'end':'7.67',
        'option':{
          'messagesInPerSec':'4.17msg/s',
          'BytesInPerSec':'4175.7byte/s',
          'function_name':'',
          'name':'es_sink_tieba_doc_prepared',
          'direct':'sink',
          'topic':'tieba_doc_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.38',
        'end':'7.68',
        'option':{
          'messagesInPerSec':'4.08msg/s',
          'BytesInPerSec':'3929.54byte/s',
          'function_name':'',
          'name':'es_sink_twitter_doc_prepared',
          'direct':'sink',
          'topic':'twitter_doc_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.40',
        'end':'7.69',
        'option':{
          'messagesInPerSec':'0.0msg/s',
          'BytesInPerSec':'0.0byte/s',
          'function_name':'',
          'name':'es_sink_weibo_comment_doc_prepared_v1',
          'direct':'sink',
          'topic':'weibo_comment_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.39',
        'end':'7.70',
        'option':{
          'messagesInPerSec':'3309.12msg/s',
          'BytesInPerSec':'3523092.9byte/s',
          'function_name':'',
          'name':'es_sink_weibo_doc_prepared_v1',
          'direct':'sink',
          'topic':'weibo_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.27',
        'end':'7.71',
        'option':{
          'messagesInPerSec':'5.96msg/s',
          'BytesInPerSec':'74973.7byte/s',
          'function_name':'',
          'name':'es_sink_weixin_doc_prepared_v1',
          'direct':'sink',
          'topic':'weixin_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.28',
        'end':'7.72',
        'option':{
          'messagesInPerSec':'1.15msg/s',
          'BytesInPerSec':'477.65byte/s',
          'function_name':'',
          'name':'es_sink_weixin_gzh_prepared_v1',
          'direct':'sink',
          'topic':'weixin_gzh_prepared_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.36',
        'end':'7.73',
        'option':{
          'messagesInPerSec':'0.33msg/s',
          'BytesInPerSec':'275.62byte/s',
          'function_name':'',
          'name':'es_sink_wenda_comment_prepared',
          'direct':'sink',
          'topic':'wenda_comment_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.37',
        'end':'7.74',
        'option':{
          'messagesInPerSec':'0.47msg/s',
          'BytesInPerSec':'973.63byte/s',
          'function_name':'',
          'name':'es_sink_wenda_doc_prepared',
          'direct':'sink',
          'topic':'wenda_doc_prepared',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.29',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'16.71msg/s',
          'BytesInPerSec':'95617.68byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_appnews_doc_prepared_v1',
          'direct':'sink',
          'topic':'appnews_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.26',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'3.24msg/s',
          'BytesInPerSec':'9221.97byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_bbs_doc_prepared_v1',
          'direct':'sink',
          'topic':'bbs_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.11',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'12.22msg/s',
          'BytesInPerSec':'44590.58byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_blog_doc_prepared_1',
          'direct':'sink',
          'topic':'blog_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.13',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'0.13msg/s',
          'BytesInPerSec':'271.76byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_facebook_prepared',
          'direct':'sink',
          'topic':'facebook_prepared',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.24',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'47.65msg/s',
          'BytesInPerSec':'246196.31byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_news_doc_prepared_v1',
          'direct':'sink',
          'topic':'news_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.2',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'0.14msg/s',
          'BytesInPerSec':'618.4byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_newspaper_doc_prepared_1',
          'direct':'sink',
          'topic':'newspaper_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.23',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'0.36msg/s',
          'BytesInPerSec':'1335.36byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_overseanews_doc_prepared_1',
          'direct':'sink',
          'topic':'overseanews_doc_prepared_1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.34',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'4.17msg/s',
          'BytesInPerSec':'4175.7byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_tieba_doc_prepared',
          'direct':'sink',
          'topic':'tieba_doc_prepared',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.38',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'4.08msg/s',
          'BytesInPerSec':'3929.54byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_twitter_doc_prepared',
          'direct':'sink',
          'topic':'twitter_doc_prepared',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.39',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'3309.12msg/s',
          'BytesInPerSec':'3523092.9byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_weibo_doc_prepared_v1',
          'direct':'sink',
          'topic':'weibo_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.27',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'5.96msg/s',
          'BytesInPerSec':'74973.7byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_weixin_doc_prepared_v1',
          'direct':'sink',
          'topic':'weixin_doc_prepared_v1',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.37',
        'end':'7.127',
        'option':{
          'messagesInPerSec':'0.47msg/s',
          'BytesInPerSec':'973.63byte/s',
          'function_name':'yt_kafka_filter',
          'name':'filter_wenda_doc_prepared',
          'direct':'sink',
          'topic':'wenda_doc_prepared',
          'type':'task',
          'pg_connection_name':'pg_10.20.8.1'
        }
      },
      {
        'start':'7.98',
        'end':'7.31',
        'option':{
          'messagesInPerSec':'20.48msg/s',
          'BytesInPerSec':'10780.9byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_appnews_comments_crawler_v1',
          'direct':'sink',
          'topic':'appnews_comments_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.81',
        'end':'7.29',
        'option':{
          'messagesInPerSec':'16.75msg/s',
          'BytesInPerSec':'77708.71byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_appnews_doc_crawler_v1',
          'direct':'sink',
          'topic':'appnews_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.99',
        'end':'7.30',
        'option':{
          'messagesInPerSec':'0.01msg/s',
          'BytesInPerSec':'5.75byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_bbs_comment_crawler',
          'direct':'sink',
          'topic':'bbs_comment_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.103',
        'end':'7.26',
        'option':{
          'messagesInPerSec':'3.24msg/s',
          'BytesInPerSec':'7003.79byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_bbs_doc_crawler_v1',
          'direct':'sink',
          'topic':'bbs_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.10',
        'end':'7.11',
        'option':{
          'messagesInPerSec':'12.25msg/s',
          'BytesInPerSec':'37107.35byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_blog_doc_crawler',
          'direct':'sink',
          'topic':'blog_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.12',
        'end':'7.13',
        'option':{
          'messagesInPerSec':'0.13msg/s',
          'BytesInPerSec':'257.45byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_facebook_crawler',
          'direct':'sink',
          'topic':'facebook_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.105',
        'end':'7.25',
        'option':{
          'messagesInPerSec':'0.0msg/s',
          'BytesInPerSec':'1.15byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_news_comments_crawler',
          'direct':'sink',
          'topic':'news_comments_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.104',
        'end':'7.24',
        'option':{
          'messagesInPerSec':'47.67msg/s',
          'BytesInPerSec':'193955.67byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_news_doc_crawler_v1',
          'direct':'sink',
          'topic':'news_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.1',
        'end':'7.2',
        'option':{
          'messagesInPerSec':'0.14msg/s',
          'BytesInPerSec':'490.36byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_newspaper_doc_crawler',
          'direct':'sink',
          'topic':'newspaper_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.102',
        'end':'7.23',
        'option':{
          'messagesInPerSec':'0.36msg/s',
          'BytesInPerSec':'918.46byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_overseanews_doc_crawler',
          'direct':'sink',
          'topic':'overseanews_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.96',
        'end':'7.35',
        'option':{
          'messagesInPerSec':'67.16msg/s',
          'BytesInPerSec':'37831.65byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_tieba_comment_crawler',
          'direct':'sink',
          'topic':'tieba_comment_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.97',
        'end':'7.34',
        'option':{
          'messagesInPerSec':'4.19msg/s',
          'BytesInPerSec':'3347.05byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_tieba_doc_crawler',
          'direct':'sink',
          'topic':'tieba_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.93',
        'end':'7.38',
        'option':{
          'messagesInPerSec':'4.08msg/s',
          'BytesInPerSec':'3667.53byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_twitter_doc_crawler',
          'direct':'sink',
          'topic':'twitter_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.92',
        'end':'7.40',
        'option':{
          'messagesInPerSec':'0.0msg/s',
          'BytesInPerSec':'0.0byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_weibo_comment_doc_crawler_v1',
          'direct':'sink',
          'topic':'weibo_comment_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.91',
        'end':'7.39',
        'option':{
          'messagesInPerSec':'3306.37msg/s',
          'BytesInPerSec':'3032372.73byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_weibo_doc_crawler_v1',
          'direct':'sink',
          'topic':'weibo_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.101',
        'end':'7.27',
        'option':{
          'messagesInPerSec':'5.87msg/s',
          'BytesInPerSec':'68448.26byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_weixin_doc_crawler_v1',
          'direct':'sink',
          'topic':'weixin_doc_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.100',
        'end':'7.28',
        'option':{
          'messagesInPerSec':'1.14msg/s',
          'BytesInPerSec':'476.2byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_weixin_gzh_crawler_v1',
          'direct':'sink',
          'topic':'weixin_gzh_crawler_v1',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.95',
        'end':'7.36',
        'option':{
          'messagesInPerSec':'0.83msg/s',
          'BytesInPerSec':'530.5byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_wenda_comment_crawler',
          'direct':'sink',
          'topic':'wenda_comment_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      },
      {
        'start':'7.94',
        'end':'7.37',
        'option':{
          'messagesInPerSec':'0.96msg/s',
          'BytesInPerSec':'855.59byte/s',
          'function_name':'kafka_prepared',
          'name':'kafka_sink_wenda_doc_crawler',
          'direct':'sink',
          'topic':'wenda_doc_crawler',
          'type':'task',
          'pg_connection_name':'10.20.8.12_pg'
        }
      }
    ],
    'state':[
      {
        'dbType': 'Kafka',
        'id': '7.2',
        'label': '10.20.18.6_kafka\\##newspaper_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.9',
        'label': '10.100.1.83_kafka\\##yht_elecnews_test_v2'
      },
      {
        'dbType': 'Kafka',
        'id': '7.29',
        'label': '10.20.18.6_kafka\\##appnews_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.90',
        'label': '10.20.18.6_kafka##app_news_doc'
      },
      {
        'dbType': 'Kafka',
        'id': '7.35',
        'label': '10.20.18.6_kafka##tieba_comment_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.80',
        'label': '10.20.18.6_kafka##forum_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.24',
        'label': '10.20.18.6_kafka##news_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.85',
        'label': '10.20.18.6_kafka##news_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.43',
        'label': '10.20.18.6_kafka##appnews_comments_statistic_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.45',
        'label': '10.20.18.6_kafka##appnews_comments_cnt'
      },
      {
        'dbType': 'Kafka',
        'id': '7.26',
        'label': '10.20.18.6_kafka##bbs_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.77',
        'label': '10.20.18.6_kafka##yqpt_bbs_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.23',
        'label': '10.20.18.6_kafka##overseanews_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.87',
        'label': '10.20.18.6_kafka##oversea_news_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.34',
        'label': '10.20.18.6_kafka##tieba_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.80',
        'label': '10.20.18.6_kafka##forum_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.29',
        'label': '10.20.18.6_kafka##appnews_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.57',
        'label': '10.20.8.10_es_v2##in_app_news'
      },
      {
        'dbType': 'Kafka',
        'id': '7.31',
        'label': '10.20.18.6_kafka##appnews_comments_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.42',
        'label': '10.20.18.6_kafka##app_comments'
      },
      {
        'dbType': 'Kafka',
        'id': '7.37',
        'label': '10.20.18.6_kafka##wenda_doc_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.74',
        'label': '10.20.8.10_es_v2##in_wenda'
      },
      {
        'dbType': 'Kafka',
        'id': '7.38',
        'label': '10.20.18.6_kafka##twitter_doc_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.68',
        'label': '10.20.8.10_es_v2##in_twitter'
      },
      {
        'dbType': 'Kafka',
        'id': '7.2',
        'label': '10.20.18.6_kafka##newspaper_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.20',
        'label': '10.20.18.6_kafka##elecnews_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.40',
        'label': '10.20.18.6_kafka##weibo_comment_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.69',
        'label': '10.20.8.10_es_v2##in_weibo_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.31',
        'label': '10.20.18.6_kafka\##appnews_comments_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.54',
        'label': '10.20.8.10_es_v2##in_app_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.34',
        'label': '10.20.18.6_kafka##tieba_doc_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.67',
        'label': '10.20.8.10_es_v2##in_tieba'
      },
      {
        'dbType': 'Kafka',
        'id': '7.39',
        'label': '10.20.18.6_kafka##weibo_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.70',
        'label': '10.20.8.10_es_v2##in_weibo'
      },
      {
        'dbType': 'Kafka',
        'id': '7.27',
        'label': '10.20.18.6_kafka##weixin_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.35',
        'label': '10.20.18.6_kafka##tieba_comment_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.66',
        'label': '10.20.8.10_es_v2##in_tieba_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.27',
        'label': '10.20.18.6_kafka##weixin_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.71',
        'label': '10.20.8.10_es_v2##in_weixin'
      },
      {
        'dbType': 'Kafka',
        'id': '7.27',
        'label': '10.20.18.6_kafka##weixin_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.89',
        'label': '10.20.18.6_kafka##weixin_gzh_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.11',
        'label': '10.20.18.6_kafka##blog_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.32',
        'label': '10.20.18.6_kafka##yqpt_blog_doc_tmp'
      },
      {
        'dbType': 'Kafka',
        'id': '7.12',
        'label': '10.20.18.6_kafka##facebook_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.13',
        'label': '10.20.18.6_kafka##facebook_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.2',
        'label': '10.20.18.6_kafka##newspaper_doc_prepared_1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.64',
        'label': '10.20.8.10_es_v2##in_newspaper'
      },
      {
        'dbType': 'Kafka',
        'id': '7.36',
        'label': '10.20.18.6_kafka##wenda_comment_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.73',
        'label': '10.20.8.10_es_v2##in_wenda_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.30',
        'label': '10.20.18.6_kafka##bbs_comment_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.58',
        'label': '10.20.8.10_es_v2##in_bbs_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.24',
        'label': '10.20.18.6_kafka##news_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.63',
        'label': '10.20.8.10_es_v2##in_news'
      },
      {
        'dbType': 'Kafka',
        'id': '7.26',
        'label': '10.20.18.6_kafka##bbs_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.23',
        'label': '10.20.18.6_kafka##overseanews_doc_prepared_1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.65',
        'label': '10.20.8.10_es_v2##in_oversea_news'
      },
      {
        'dbType': 'Kafka',
        'id': '7.13',
        'label': '10.20.18.6_kafka##facebook_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.61',
        'label': '10.20.8.10_es_v2##in_facebook'
      },
      {
        'dbType': 'Kafka',
        'id': '7.2',
        'label': '10.20.18.6_kafka##newspaper_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.23',
        'label': '10.20.18.6_kafka##overseanews_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.29',
        'label': '10.20.18.6_kafka##appnews_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.11',
        'label': '10.20.18.6_kafka##blog_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.11',
        'label': '10.20.18.6_kafka##blog_doc_prepared_1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.60',
        'label': '10.20.8.10_es_v2##in_blog'
      },
      {
        'dbType': 'Kafka',
        'id': '7.26',
        'label': '10.20.18.6_kafka##bbs_doc_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.59',
        'label': '10.20.8.10_es_v2##in_bbs'
      },
      {
        'dbType': 'Kafka',
        'id': '7.24',
        'label': '10.20.18.6_kafka##news_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.104',
        'label': '10.20.18.6_kafka##news_doc_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.24',
        'label': '10.20.18.6_kafka##news_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.38',
        'label': '10.20.18.6_kafka##twitter_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.25',
        'label': '10.20.18.6_kafka##news_comments_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.105',
        'label': '10.20.18.6_kafka##news_comments_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.13',
        'label': '10.20.18.6_kafka##facebook_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.1',
        'label': '10.20.18.6_kafka##newspaper_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.2',
        'label': '10.20.18.6_kafka##newspaper_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.31',
        'label': '10.20.18.6_kafka##appnews_comments_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.98',
        'label': '10.20.18.6_kafka##appnews_comments_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.26',
        'label': '10.20.18.6_kafka##bbs_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.103',
        'label': '10.20.18.6_kafka##bbs_doc_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.39',
        'label': '10.20.18.6_kafka##weibo_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.38',
        'label': '10.20.18.6_kafka##twitter_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.93',
        'label': '10.20.18.6_kafka##twitter_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.34',
        'label': '10.20.18.6_kafka##tieba_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.25',
        'label': '10.20.18.6_kafka##news_comments_prepared'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.62',
        'label': '10.20.8.10_es_v2##in_news_comment'
      },
      {
        'dbType': 'Kafka',
        'id': '7.37',
        'label': '10.20.18.6_kafka##wenda_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.127',
        'label': '10.20.18.6_kafka##user_admin_rulefilter_result'
      },
      {
        'dbType': 'Kafka',
        'id': '7.34',
        'label': '10.20.18.6_kafka##tieba_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.97',
        'label': '10.20.18.6_kafka##tieba_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.29',
        'label': '10.20.18.6_kafka##appnews_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.81',
        'label': '10.20.18.6_kafka##appnews_doc_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.40',
        'label': '10.20.18.6_kafka##weibo_comment_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.92',
        'label': '10.20.18.6_kafka##weibo_comment_doc_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.30',
        'label': '10.20.18.6_kafka##bbs_comment_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.99',
        'label': '10.20.18.6_kafka##bbs_comment_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.28',
        'label': '10.20.18.6_kafka##weixin_gzh_prepared_v1'
      },
      {
        'dbType': 'elasticsearch',
        'id': '7.72',
        'label': '10.20.8.10_es_v2##in_weixin_gzh'
      },
      {
        'dbType': 'Kafka',
        'id': '7.10',
        'label': '10.20.18.6_kafka##blog_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.11',
        'label': '10.20.18.6_kafka##blog_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.23',
        'label': '10.20.18.6_kafka##overseanews_doc_prepared_1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.102',
        'label': '10.20.18.6_kafka##overseanews_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.36',
        'label': '10.20.18.6_kafka##wenda_comment_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.95',
        'label': '10.20.18.6_kafka##wenda_comment_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.28',
        'label': '10.20.18.6_kafka##weixin_gzh_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.100',
        'label': '10.20.18.6_kafka##weixin_gzh_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.39',
        'label': '10.20.18.6_kafka##weibo_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.91',
        'label': '10.20.18.6_kafka##weibo_doc_crawler_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.35',
        'label': '10.20.18.6_kafka##tieba_comment_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.96',
        'label': '10.20.18.6_kafka##tieba_comment_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.37',
        'label': '10.20.18.6_kafka##wenda_doc_prepared'
      },
      {
        'dbType': 'Kafka',
        'id': '7.94',
        'label': '10.20.18.6_kafka##wenda_doc_crawler'
      },
      {
        'dbType': 'Kafka',
        'id': '7.27',
        'label': '10.20.18.6_kafka##weixin_doc_prepared_v1'
      },
      {
        'dbType': 'Kafka',
        'id': '7.101',
        'label': '10.20.18.6_kafka##weixin_doc_crawler_v1'
      }
    ]
  };
   const state = [
     { id: 1, label: 'V1##数据同步', class: 'type-suss' },
     { id: 2, label: 'V2##hive-sql', class: 'type-suss' },
     { id: 3, label: 'V3##spark-sql', class: 'type-init' },
     { id: 4, label: 'V4##shell', class: 'type-ready' },
     { id: 5, label: 'V5##python', class: 'type-fail' },
     { id: 6, label: 'V6##虚节点', class: 'type-suss' },
     { id: 7, label: 'V7##spark-sql', class: 'type-suss' },
     { id: 8, label: 'V8##shell', class: 'type-freeze' },
     { id: 9, label: 'V9##数据同步', class: 'type-suss' },
     { id: 10, label: 'V10##shell', class: 'type-queue' },
     { id: 11, label: 'V11##spark-sql', class: 'type-run' },
     { id: 12, label: 'V12##spark-sql', class: 'type-suss' },
     { id: 13, label: 'V13##虚节点', class: 'type-init' },
     { id: 14, label: 'V14##数据同步', class: 'type-fail' },
     { id: 15, label: 'V15##test', class: 'type-fail' },
     { id: 16, label: 'V16##test-1', class: 'type-fail' },
     { id: 17, label: 'V17##test-2', class: 'type-fail' },
     { id: 0, label: 'V18##hive-sql', class: 'type-freeze' },
   ];
   const edg = [
     { start: 1, end: 4, option: {} },
     { start: 1, end: 3, option: {} },
     { start: 1, end: 2, option: {} },
     { start: 6, end: 7, option: {} },
     { start: 5, end: 6, option: {} },
     { start: 9, end: 10, option: {} },
     { start: 8, end: 9, option: {} },
     { start: 11, end: 12, option: {} },
     { start: 8, end: 11, option: {} },
     { start: 5, end: 8, option: {} },
     { start: 1, end: 5, option: {} },
     { start: 13, end: 14, option: {} },
     { start: 1, end: 13, option: {} },
     { start: 0, end: 1, option: {} },
     { start: 15, end: 16, option: {} },
     { start: 15, end: 17, option: {} }
   ];

