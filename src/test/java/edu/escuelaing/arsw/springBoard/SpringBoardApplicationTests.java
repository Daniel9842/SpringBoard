package edu.escuelaing.arsw.springBoard;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import edu.escuelaing.arsw.springBoard.cache.SavePoints;

@SpringBootTest
class SpringBoardApplicationTests {
	/**
	 * this test verifies that the saved points are returned correctly
	 */
	@Test
	public void testCache1() {
		SavePoints cache = SavePoints.getInstance();
		cache.addPositions("{\"newpointsarr\":[]}");
		assertEquals("{\"newpointsarr\":[]}",cache.getPositions());
	}
	/**
	 * this test verifies that the saved points are returned correctly
	 */
	@Test
	public void testCache2() {
		SavePoints cache = SavePoints.getInstance();
		cache.addPositions("{\"newpointsarr\":[[117,310],[117,310],[117,310],[117,310]]}");
		assertEquals("{\"newpointsarr\":[[117,310],[117,310],[117,310],[117,310]]}",cache.getPositions());
	}

}

