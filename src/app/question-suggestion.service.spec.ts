import { TestBed, inject } from '@angular/core/testing';

import { QuestionSuggestionService } from './question-suggestion.service';

describe('QuestionSuggestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionSuggestionService]
    });
  });

  it('should be created', inject([QuestionSuggestionService], (service: QuestionSuggestionService) => {
    expect(service).toBeTruthy();
  }));
});
