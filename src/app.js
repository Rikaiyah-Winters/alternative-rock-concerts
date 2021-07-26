/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '81NI4I861Y',
  'faa75eed93f08f18ee1cac893634347f'
);

const search = instantsearch({
  indexName: 'alternative_rock_artist_concerts',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#band-list',
    attribute: 'name',
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 8
  }),

  instantsearch.widgets.hits({
    container: '#hits',
        templates: {
      item: `
        <article>
        <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
        <p>{{#helpers.highlight}}{ "attribute": "date" }{{/helpers.highlight}}</p>
        <p>{{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}</p>
      </article>
      `,
    }
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
